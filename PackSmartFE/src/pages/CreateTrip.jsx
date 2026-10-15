
import { Box,} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ResponsiveContainer from '../components/ResponsiveContainer';
import PageHeader from '../components/PageHeader';
import TripForm from '../components/TripForm';


const CreateTrip = () => {
  const navigate = useNavigate();
  

  return (
    <Box sx={{ pb: 8 }}>
      <ResponsiveContainer>
        <PageHeader
          title="Plan a New Adventure"
          subtitle="Tell us about your upcoming journey. We'll generate an intelligent, personalized packing checklist tailored to your style."
          backUrl="/"
          backLabel="Back to Home"
        />

        <TripForm
          initialValues={initialValues}
          onSubmit={handleCreateTrip}
          submitLabel="Generate My Packing List"
        />
      </ResponsiveContainer>

     
    </Box>
  );
};

export default CreateTrip;