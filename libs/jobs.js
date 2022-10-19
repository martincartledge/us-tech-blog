const LOCATIONS = ["London", "Kaunas", "Berlin"];
const DEPARTMENTS = ["Technology", "Product Management", "Engineering"];

const isLocation = (job) =>
  LOCATIONS.some((location) => job.location.name.includes(location));

const isDepartment = (job) =>
  job.metadata.some((dept) => DEPARTMENTS.includes(dept.value));

const filterJobs = (allJobs) =>
  allJobs?.filter((job) => isLocation(job) && isDepartment(job)) ?? [];

export async function fetchJobs() {
  try {
    let response = await fetch(
      "https://boards-api.greenhouse.io/v1/boards/opentable/jobs"
    );
    response = await response.json();
    return filterJobs(response.jobs);
  } catch (e) {
    return [];
  }
}
