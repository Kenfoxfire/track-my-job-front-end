import React, { useEffect, useState } from 'react';
import { getJobs, createJob, deleteJob, Job } from '../services/dataService';
import NavBar from './NavBar';


const TableComponent: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const handleCreateJob = async () => {
    const newJob = await createJob({ title, company, date: new Date().toISOString() });
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  const handleDeleteJob = async (jobId:any) => {
    try {
      await deleteJob(jobId); // Elimina el trabajo en el backend
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId)); // Actualiza el estado para eliminar el trabajo de la lista
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };




  return (
    <> 
      <NavBar />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-color4 dark:bg-darkBackground border border-color1 dark:border-darkColor1 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-white dark:bg-darkColor2 text-color1 dark:text-darkText uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left text-lg font-bold font-montserrat">Fecha</th>
              <th className="py-3 px-6 text-left text-lg font-bold font-montserrat">Compañía</th>
              <th className="py-3 px-6 text-left text-lg font-bold font-montserrat">Puesto</th>
              <th className="py-3 px-6 text-left text-lg font-bold font-montserrat">Estado</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-darkBackground text-color1 dark:text-darkText text-sm font-light">
            {jobs.map((job) => (
              <tr key={job.id} className="border-b border-color2 dark:border-darkColor2 hover:bg-color1 hover:text-white  dark:hover:bg-darkColor3">
                <td className="py-3 px-6 text-left whitespace-nowrap  font-montserrat">{job.date}</td>
                <td className="py-3 px-6 text-left  font-montserrat">{job.company}</td>
                <td className="py-3 px-6 text-left  font-montserrat">{job.title}</td>
                <button  onClick={() => handleDeleteJob(job.id)}  
                className="bg-buttons dark:bg-darkButtons text-white text-left dark:text-darkText py-2 px-4 rounded-lg hover:bg-buttonsHover dark:hover:bg-darkButtonsHover">
                  Borrar
                </button>
                
              
              </tr>
            ))}
          </tbody>

        </table>
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-darkBackground rounded-lg shadow-md">
  <h2 className="text-xl font-bold mb-4 text-color1  dark:text-color5">Create New Job</h2>

  <input
    type="text"
    placeholder="Job title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <input
    type="text"
    placeholder="Company"
    value={company}
    onChange={(e) => setCompany(e.target.value)}
    className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <button
    onClick={handleCreateJob}
    className="w-full bg-buttons text-white dark:bg-darkButtons  dark:text-darkText py-2 rounded-lg  hover:bg-buttonsHover dark:hover:bg-darkButtonsHover transition duration-200"
  >
    Create Job
  </button>
</div>
        
      </div>
    </>
  );
};

export default TableComponent;
