// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import { describe, it } from 'mocha';
import * as snapshotsv1beta3Module from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta3.SnapshotsV1Beta3Client', () => {
    it('has servicePath', () => {
        const servicePath = snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.snapshotsV1Beta3Stub, undefined);
        await client.initialize();
        assert(client.snapshotsV1Beta3Stub);
    });

    it('has close method', () => {
        const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.close();
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
        const result = await client.getProjectId();
        assert.strictEqual(result, fakeProjectId);
        assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
        const promise = new Promise((resolve, reject) => {
            client.getProjectId((err?: Error|null, projectId?: string|null) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(projectId);
                }
            });
        });
        const result = await promise;
        assert.strictEqual(result, fakeProjectId);
    });

    describe('getSnapshot', () => {
        it('invokes getSnapshot without error', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetSnapshotRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.dataflow.v1beta3.Snapshot());
            client.innerApiCalls.getSnapshot = stubSimpleCall(expectedResponse);
            const [response] = await client.getSnapshot(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getSnapshot as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getSnapshot without error using callback', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetSnapshotRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.dataflow.v1beta3.Snapshot());
            client.innerApiCalls.getSnapshot = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getSnapshot(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.ISnapshot|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getSnapshot as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getSnapshot with error', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetSnapshotRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.getSnapshot = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getSnapshot(request), expectedError);
            assert((client.innerApiCalls.getSnapshot as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('deleteSnapshot', () => {
        it('invokes deleteSnapshot without error', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.DeleteSnapshotRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.dataflow.v1beta3.DeleteSnapshotResponse());
            client.innerApiCalls.deleteSnapshot = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteSnapshot(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteSnapshot as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes deleteSnapshot without error using callback', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.DeleteSnapshotRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.dataflow.v1beta3.DeleteSnapshotResponse());
            client.innerApiCalls.deleteSnapshot = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteSnapshot(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.IDeleteSnapshotResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.deleteSnapshot as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes deleteSnapshot with error', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.DeleteSnapshotRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteSnapshot = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteSnapshot(request), expectedError);
            assert((client.innerApiCalls.deleteSnapshot as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });

    describe('listSnapshots', () => {
        it('invokes listSnapshots without error', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListSnapshotsRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.dataflow.v1beta3.ListSnapshotsResponse());
            client.innerApiCalls.listSnapshots = stubSimpleCall(expectedResponse);
            const [response] = await client.listSnapshots(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listSnapshots as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes listSnapshots without error using callback', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListSnapshotsRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedResponse = generateSampleMessage(new protos.google.dataflow.v1beta3.ListSnapshotsResponse());
            client.innerApiCalls.listSnapshots = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.listSnapshots(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.IListSnapshotsResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.listSnapshots as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes listSnapshots with error', async () => {
            const client = new snapshotsv1beta3Module.v1beta3.SnapshotsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.ListSnapshotsRequest());
            const expectedOptions = {otherArgs: {headers: {}}};;
            const expectedError = new Error('expected');
            client.innerApiCalls.listSnapshots = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.listSnapshots(request), expectedError);
            assert((client.innerApiCalls.listSnapshots as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });
    });
});
