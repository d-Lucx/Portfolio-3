import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fetchContributions } from '../lib/github/client.ts';

test('HTTP and GraphQL failures never leak credentials or retry', async () => {
  for(const status of [401,403,429,500]) {
    let calls=0;
    await assert.rejects(fetchContributions({ now:new Date(),token:'private-test-token',fetchImpl:async () => {calls++;return new Response('{}',{status});} }), error => error instanceof Error && !error.message.includes('private-test-token'));
    assert.equal(calls,1);
  }
  await assert.rejects(fetchContributions({now:new Date(),token:'private-test-token',fetchImpl:async()=>Response.json({errors:[{message:'private-test-token'}]})}), /Contributions unavailable/);
});
test('invalid JSON, null user, and request timeout are unavailable, not an empty year',async()=>{
  for(const response of [new Response('not-json'),Response.json({data:{user:null}})]) await assert.rejects(fetchContributions({now:new Date(),token:'t',fetchImpl:async()=>response}));
  await assert.rejects(fetchContributions({now:new Date(),token:'t',timeoutMs:15,fetchImpl:async(_url,init)=>new Promise((_resolve,reject)=>init?.signal?.addEventListener('abort',()=>reject(new Error('aborted'))))}), /Contributions unavailable/);
});
test('requests target only the documented API with a fixed username',async()=>{
  let requestUrl='';let body='';
  await assert.rejects(fetchContributions({now:new Date('2026-11-14T17:00:00Z'),token:'t',fetchImpl:async(url,init)=>{requestUrl=String(url);body=String(init?.body);return Response.json({data:{user:null}});}}));
  assert.equal(requestUrl,'https://api.github.com/graphql');
  const sent=JSON.parse(body);assert.equal(sent.variables.login,'d-Lucx');assert.equal(sent.variables.to,'2026-11-14T17:00:00.000Z');
});
