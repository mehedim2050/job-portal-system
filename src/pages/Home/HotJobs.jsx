import React, { useEffect, useState } from 'react';
import JobCard from '../Shared/JobCard';

const HotJobs = ({ jobPromise }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobPromise.then(data => setJobs(data));
    }, [jobPromise]);

    return (
        <div>
            <h2 className='text-4xl text-center'>Hot Jobs of the day!</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    );
};

export default HotJobs;
