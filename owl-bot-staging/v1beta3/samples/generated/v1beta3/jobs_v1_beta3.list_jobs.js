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
  // [START dataflow_list_jobs_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The kind of filter to use.
   */
  // const filter = ''
  /**
   *  The project which owns the jobs.
   */
  // const projectId = 'abc123'
  /**
   *  Deprecated. ListJobs always returns summaries now.
   *  Use GetJob for other JobViews.
   */
  // const view = ''
  /**
   *  If there are many jobs, limit response to at most this many.
   *  The actual number of jobs returned will be the lesser of max_responses
   *  and an unspecified server-defined limit.
   */
  // const pageSize = 1234
  /**
   *  Set this to the 'next_page_token' field of a previous response
   *  to request additional results in a long list.
   */
  // const pageToken = 'abc123'
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

  async function listJobs() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await dataflowClient.listJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listJobs();
  // [END dataflow_list_jobs_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
