import { api_URL } from "../env";


export interface Job {
    id: number;
    date: string;
    company: string;
    title: string;
    
    
  }
  
  export interface Credentials {
    username: string;
    password: string;
  }
  
  
  
  // Función para iniciar sesión
  export const loginUser = async (credentials: Credentials): Promise<any> => {
    try {
      const response = await fetch(`${api_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) throw new Error('Error en la autenticación');
      return await response.json();
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };
  
  // Función para obtener todos los trabajos
  export const getJobs = async (): Promise<Job[]> => {
    try {
      const response = await fetch(`${api_URL}/jobs`);
      if (!response.ok) throw new Error('Error al obtener trabajos');
      return await response.json();
    } catch (error) {
      console.error('Error al obtener trabajos:', error);
      throw error;
    }
  };
  
  // Función para crear un trabajo
  export const createJob = async (jobData: Omit<Job, 'id'>): Promise<Job> => {
    try {
      const response = await fetch(`${api_URL}/jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });
      if (!response.ok) throw new Error('Error al crear trabajo');
      return await response.json();
    } catch (error) {
      console.error('Error al crear trabajo:', error);
      throw error;
    }
  };
  
  // Función para actualizar un trabajo
  export const updateJob = async (id: number, jobData: Omit<Job, 'id'>): Promise<Job> => {
    try {
      const response = await fetch(`${api_URL}/jobs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });
      if (!response.ok) throw new Error('Error al actualizar trabajo');
      return await response.json();
    } catch (error) {
      console.error('Error al actualizar trabajo:', error);
      throw error;
    }
  };
  
  // Función para eliminar un trabajo
  export const deleteJob = async (id: number): Promise<void> => {
    try {
      const response = await fetch(`${api_URL}/jobs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar trabajo');
    } catch (error) {
      console.error('Error al eliminar trabajo:', error);
      throw error;
    }
  };
  