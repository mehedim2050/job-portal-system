import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hooks/useAuth';


const myApplicationsPromise = email =>{
    return fetch(`http://localhost:3000/job/application?email=${email}`)
    .then(res => res.json())
}
const MyApplications = () => {
    const  {user} = useAuth();


    return (
        <div>
          <ApplicationStats></ApplicationStats>
          <Suspense fallback={'loading your applications'}>
          <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)} />

          </Suspense>
        </div>
    );
};

export default MyApplications;