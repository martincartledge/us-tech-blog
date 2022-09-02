export const filterJobs = (allJobs) => {
  return allJobs
    ? allJobs.filter(
        (j) =>
          j.metadata.some(
            (d) => d.value === "Technology" || d.value === "Product Management"
          ) &&
          (j.location.name === "London" ||
            j.location.name === "London - Remote")
      )
    : [];
};
