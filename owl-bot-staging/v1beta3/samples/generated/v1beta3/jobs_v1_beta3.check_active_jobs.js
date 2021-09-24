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
  // [START dataflow_v1beta3_generated_JobsV1Beta3_CheckActiveJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The project which owns the jobs.
   */
  // const projectId = 'abc123'

  // Imports the Dataflow library
  const {JobsV1Beta3Client} = require('@google-cloud/dataflow').v1beta3;

  // Instantiates a client
  const dataflowClient = new JobsV1Beta3Client();

  async function checkActiveJobs() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await dataflowClient.checkActiveJobs(request);
    console.log(response);
  }

  checkActiveJobs();
  // [END dataflow_v1beta3_generated_JobsV1Beta3_CheckActiveJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
