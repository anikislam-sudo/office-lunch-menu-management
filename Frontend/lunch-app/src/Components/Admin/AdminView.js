import React from 'react';
import AddMenuOption from './AddMenuOption';
import ViewEmployeeChoices from './ViewEmployeeChoices';

const AdminView = () => {
    return (
        
            <div>
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <AddMenuOption />
      <ViewEmployeeChoices />
    </div>
      
    );
};

export default AdminView;