// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main() {
  // [START dataflow_create_job_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The ID of the Cloud Platform project that the job belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  The job to create.
   */
  // const job = ''
  /**
   *  The level of information requested in response.
   */
  // const view = ''
  /**
   *  Deprecated. This field is now in the Job message.
   */
  // const replaceJobId = 'abc123'
  /**
   *  The [regional endpoint]
   *  (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that
   *  contains this job.
   */
  // const location = 'abc123'

  // Imports the Dataflow library
  const {JobsV1Beta3Client} = require('@google-cloud/dataflow').v1beta3;

  // Instantiates a client
  const dataflowClient = new JobsV1Beta3Client();

  async function createJob() {
    // Construct request
    const request = {};

    // Run request
    const response = await dataflowClient.createJob(request);
    console.log(response);
  }

  createJob();
  // [END dataflow_create_job_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
