// import React from 'react';
// import { Link, useParams } from 'react-router';
// import useAuth from '../../hooks/useAuth';

// const JobApply = () => {
//   const { id: jobId } = useParams();
//   const { user } = useAuth();

//   const handleApplyFormSubmit=e=>{
//     e.preventDefault();
//     const form=e.target;
//     const linkedIn=form.linkedIn.value;
//     const github=form.github.value;
//     const resume=form.resume.value;

//   }

//   return (
//     <div>
//       <h3 className="text-4xl mb-4">Apply for this job:<Link to={`/job/${jobId}`}></Link></h3>
//       <form onSubmit={handleApplyFormSubmit}>
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        
//           <label className="label">LinkedIn Link</label>
//           <input type="url" name='linkedIn' className="input" placeholder="LinkedIn profile link" />

//           <label className="label">Github Link</label>
//           <input type="url" name='github' className="input" placeholder="Github link" />

//           <label className="label">Resume Link </label>
//          <input type="url" name='resume' className="input" placeholder="Resume link" />

//          <input type='submit' className="btn" value="Apply"/>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default JobApply;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router'; // ✅ fix import
import useAuth from '../../hooks/useAuth';

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/job/${jobId}`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, [jobId]);

  const handleApplyFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const applicationData = {
      jobId,
      email: user?.email,
      linkedIn,
      github,
      resume,
    };

    console.log("Application Submitted:", applicationData);
    // Optional: send POST request to server
  };

  if (!job) return <p>Loading job details...</p>;

  return (
    <div>
      <h3 className="text-4xl mb-4">
        Apply for: <span className="font-bold">{job.title}</span> at <span className="font-semibold">{job.company}</span>
      </h3>
      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 space-y-4">

          <div>
            <label className="label">LinkedIn Link</label>
            <input type="url" name='linkedIn' className="input input-bordered w-full" placeholder="LinkedIn profile link" />
          </div>

          <div>
            <label className="label">GitHub Link</label>
            <input type="url" name='github' className="input input-bordered w-full" placeholder="GitHub profile link" />
          </div>

          <div>
            <label className="label">Resume Link</label>
            <input type="url" name='resume' className="input input-bordered w-full" placeholder="Resume link" />
          </div>

          <input type='submit' className="btn btn-primary w-full" value="Apply" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
