import { supabase } from '@/supabase'; // Ensure that the supabase.js file is correctly set up

export const fetchProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*'); // Fetch all columns

  if (error) {
    console.error('Error fetching projects:', error.message);
    return [];
  } else {
    return data;
  }
};
