// Copyright 2022 Google LLC
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
import * as metricsv1beta3Module from '../src';

import {PassThrough} from 'stream';

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

function stubPageStreamingCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    const pagingStub = sinon.stub();
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
        }
    }
    const transformStub = error ? sinon.stub().callsArgWith(2, error) : pagingStub;
    const mockStream = new PassThrough({
        objectMode: true,
        transform: transformStub,
    });
    // trigger as many responses as needed
    if (responses) {
        for (let i = 0; i < responses.length; ++i) {
            setImmediate(() => { mockStream.write({}); });
        }
        setImmediate(() => { mockStream.end(); });
    } else {
        setImmediate(() => { mockStream.write({}); });
        setImmediate(() => { mockStream.end(); });
    }
    return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(responses?: ResponseType[], error?: Error) {
    let counter = 0;
    const asyncIterable = {
        [Symbol.asyncIterator]() {
            return {
                async next() {
                    if (error) {
                        return Promise.reject(error);
                    }
                    if (counter >= responses!.length) {
                        return Promise.resolve({done: true, value: undefined});
                    }
                    return Promise.resolve({done: false, value: responses![counter++]});
                }
            };
        }
    };
    return sinon.stub().returns(asyncIterable);
}

describe('v1beta3.MetricsV1Beta3Client', () => {
    it('has servicePath', () => {
        const servicePath = metricsv1beta3Module.v1beta3.MetricsV1Beta3Client.servicePath;
        assert(servicePath);
    });

    it('has apiEndpoint', () => {
        const apiEndpoint = metricsv1beta3Module.v1beta3.MetricsV1Beta3Client.apiEndpoint;
        assert(apiEndpoint);
    });

    it('has port', () => {
        const port = metricsv1beta3Module.v1beta3.MetricsV1Beta3Client.port;
        assert(port);
        assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
        const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client();
        assert(client);
    });

    it('should create a client with gRPC fallback', () => {
        const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
            fallback: true,
        });
        assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
        const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.metricsV1Beta3Stub, undefined);
        await client.initialize();
        assert(client.metricsV1Beta3Stub);
    });

    it('has close method for the initialized client', done => {
        const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        client.initialize();
        assert(client.metricsV1Beta3Stub);
        client.close().then(() => {
            done();
        });
    });

    it('has close method for the non-initialized client', done => {
        const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
        assert.strictEqual(client.metricsV1Beta3Stub, undefined);
        client.close().then(() => {
            done();
        });
    });

    it('has getProjectId method', async () => {
        const fakeProjectId = 'fake-project-id';
        const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
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
        const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
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

    describe('getJobMetrics', () => {
        it('invokes getJobMetrics without error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobMetricsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.dataflow.v1beta3.JobMetrics());
            client.innerApiCalls.getJobMetrics = stubSimpleCall(expectedResponse);
            const [response] = await client.getJobMetrics(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getJobMetrics as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getJobMetrics without error using callback', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobMetricsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = generateSampleMessage(new protos.google.dataflow.v1beta3.JobMetrics());
            client.innerApiCalls.getJobMetrics = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getJobMetrics(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.IJobMetrics|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getJobMetrics as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getJobMetrics with error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobMetricsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getJobMetrics = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getJobMetrics(request), expectedError);
            assert((client.innerApiCalls.getJobMetrics as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getJobMetrics with closed client', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobMetricsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedError = new Error('The client has already been closed.');
            client.close();
            await assert.rejects(client.getJobMetrics(request), expectedError);
        });
    });

    describe('getJobExecutionDetails', () => {
        it('invokes getJobExecutionDetails without error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
            ];
            client.innerApiCalls.getJobExecutionDetails = stubSimpleCall(expectedResponse);
            const [response] = await client.getJobExecutionDetails(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getJobExecutionDetails as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getJobExecutionDetails without error using callback', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
            ];
            client.innerApiCalls.getJobExecutionDetails = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getJobExecutionDetails(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.IStageSummary[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getJobExecutionDetails as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getJobExecutionDetails with error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getJobExecutionDetails = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getJobExecutionDetails(request), expectedError);
            assert((client.innerApiCalls.getJobExecutionDetails as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getJobExecutionDetailsStream without error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
            ];
            client.descriptors.page.getJobExecutionDetails.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.getJobExecutionDetailsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.dataflow.v1beta3.StageSummary[] = [];
                stream.on('data', (response: protos.google.dataflow.v1beta3.StageSummary) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            const responses = await promise;
            assert.deepStrictEqual(responses, expectedResponse);
            assert((client.descriptors.page.getJobExecutionDetails.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.getJobExecutionDetails, request));
            assert.strictEqual(
                (client.descriptors.page.getJobExecutionDetails.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('invokes getJobExecutionDetailsStream with error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedError = new Error('expected');
            client.descriptors.page.getJobExecutionDetails.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.getJobExecutionDetailsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.dataflow.v1beta3.StageSummary[] = [];
                stream.on('data', (response: protos.google.dataflow.v1beta3.StageSummary) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
            assert((client.descriptors.page.getJobExecutionDetails.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.getJobExecutionDetails, request));
            assert.strictEqual(
                (client.descriptors.page.getJobExecutionDetails.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with getJobExecutionDetails without error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.StageSummary()),
            ];
            client.descriptors.page.getJobExecutionDetails.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.google.dataflow.v1beta3.IStageSummary[] = [];
            const iterable = client.getJobExecutionDetailsAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.getJobExecutionDetails.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.getJobExecutionDetails.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with getJobExecutionDetails with error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetJobExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";const expectedError = new Error('expected');
            client.descriptors.page.getJobExecutionDetails.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.getJobExecutionDetailsAsync(request);
            await assert.rejects(async () => {
                const responses: protos.google.dataflow.v1beta3.IStageSummary[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.getJobExecutionDetails.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.getJobExecutionDetails.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });
    });

    describe('getStageExecutionDetails', () => {
        it('invokes getStageExecutionDetails without error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetStageExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
            ];
            client.innerApiCalls.getStageExecutionDetails = stubSimpleCall(expectedResponse);
            const [response] = await client.getStageExecutionDetails(request);
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getStageExecutionDetails as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getStageExecutionDetails without error using callback', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetStageExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
            ];
            client.innerApiCalls.getStageExecutionDetails = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.getStageExecutionDetails(
                    request,
                    (err?: Error|null, result?: protos.google.dataflow.v1beta3.IWorkerDetails[]|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            assert((client.innerApiCalls.getStageExecutionDetails as SinonStub)
                .getCall(0).calledWith(request, expectedOptions /*, callback defined above */));
        });

        it('invokes getStageExecutionDetails with error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetStageExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedOptions = {
                otherArgs: {
                    headers: {
                        'x-goog-request-params': expectedHeaderRequestParams,
                    },
                },
            };
            const expectedError = new Error('expected');
            client.innerApiCalls.getStageExecutionDetails = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.getStageExecutionDetails(request), expectedError);
            assert((client.innerApiCalls.getStageExecutionDetails as SinonStub)
                .getCall(0).calledWith(request, expectedOptions, undefined));
        });

        it('invokes getStageExecutionDetailsStream without error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetStageExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
            ];
            client.descriptors.page.getStageExecutionDetails.createStream = stubPageStreamingCall(expectedResponse);
            const stream = client.getStageExecutionDetailsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.dataflow.v1beta3.WorkerDetails[] = [];
                stream.on('data', (response: protos.google.dataflow.v1beta3.WorkerDetails) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            const responses = await promise;
            assert.deepStrictEqual(responses, expectedResponse);
            assert((client.descriptors.page.getStageExecutionDetails.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.getStageExecutionDetails, request));
            assert.strictEqual(
                (client.descriptors.page.getStageExecutionDetails.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('invokes getStageExecutionDetailsStream with error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetStageExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedError = new Error('expected');
            client.descriptors.page.getStageExecutionDetails.createStream = stubPageStreamingCall(undefined, expectedError);
            const stream = client.getStageExecutionDetailsStream(request);
            const promise = new Promise((resolve, reject) => {
                const responses: protos.google.dataflow.v1beta3.WorkerDetails[] = [];
                stream.on('data', (response: protos.google.dataflow.v1beta3.WorkerDetails) => {
                    responses.push(response);
                });
                stream.on('end', () => {
                    resolve(responses);
                });
                stream.on('error', (err: Error) => {
                    reject(err);
                });
            });
            await assert.rejects(promise, expectedError);
            assert((client.descriptors.page.getStageExecutionDetails.createStream as SinonStub)
                .getCall(0).calledWith(client.innerApiCalls.getStageExecutionDetails, request));
            assert.strictEqual(
                (client.descriptors.page.getStageExecutionDetails.createStream as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with getStageExecutionDetails without error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
        });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetStageExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";
            const expectedResponse = [
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
              generateSampleMessage(new protos.google.dataflow.v1beta3.WorkerDetails()),
            ];
            client.descriptors.page.getStageExecutionDetails.asyncIterate = stubAsyncIterationCall(expectedResponse);
            const responses: protos.google.dataflow.v1beta3.IWorkerDetails[] = [];
            const iterable = client.getStageExecutionDetailsAsync(request);
            for await (const resource of iterable) {
                responses.push(resource!);
            }
            assert.deepStrictEqual(responses, expectedResponse);
            assert.deepStrictEqual(
                (client.descriptors.page.getStageExecutionDetails.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.getStageExecutionDetails.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });

        it('uses async iteration with getStageExecutionDetails with error', async () => {
            const client = new metricsv1beta3Module.v1beta3.MetricsV1Beta3Client({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            client.initialize();
            const request = generateSampleMessage(new protos.google.dataflow.v1beta3.GetStageExecutionDetailsRequest());
            request.projectId = '';
            const expectedHeaderRequestParams = "project_id=";const expectedError = new Error('expected');
            client.descriptors.page.getStageExecutionDetails.asyncIterate = stubAsyncIterationCall(undefined, expectedError);
            const iterable = client.getStageExecutionDetailsAsync(request);
            await assert.rejects(async () => {
                const responses: protos.google.dataflow.v1beta3.IWorkerDetails[] = [];
                for await (const resource of iterable) {
                    responses.push(resource!);
                }
            });
            assert.deepStrictEqual(
                (client.descriptors.page.getStageExecutionDetails.asyncIterate as SinonStub)
                    .getCall(0).args[1], request);
            assert.strictEqual(
                (client.descriptors.page.getStageExecutionDetails.asyncIterate as SinonStub)
                    .getCall(0).args[2].otherArgs.headers['x-goog-request-params'],
                expectedHeaderRequestParams
            );
        });
    });
});
