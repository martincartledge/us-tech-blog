import Section from "components/Section";
import { filterJobs } from "libs/jobs";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const JobSection = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      let response = await fetch(
        "https://boards-api.greenhouse.io/v1/boards/opentable/jobs"
      );
      response = await response.json();

      const ukTechJobs = filterJobs(response.jobs);
      setJobs(ukTechJobs);
    }

    fetchJobs();
  }, []);

  return (
    <>
      <Section>
        <h1 className={styles.title} id="careers">
          Join our team
        </h1>
        <p>
          The Technology Team delivers innovative products through rapid,
          continuous development. You’ll be with people who take pleasure in
          software design and believe that velocity comes from a commitment to
          clean code and solid engineering principles.
        </p>
      </Section>

      <section className={styles.jobListing}>
        {jobs.length ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Position</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr key={job.id}>
                  <td>{index + 1}</td>
                  <td>
                    <a
                      href={job.absolute_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.jobTitle}
                    >
                      {job.title}
                    </a>
                  </td>
                  <td>{job.location.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>There are currently no job openings. Please check back later.</p>
        )}
      </section>
    </>
  );
};

export default JobSection;
