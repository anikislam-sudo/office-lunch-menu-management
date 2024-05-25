import React from 'react';
import ViewDailyMenu from './ViewDailyMenu';
import SelectLunchChoice from './SelectLunchChoice';

const EmployeeView = () => {
    return (
        <div>
        <h2 className="text-2xl font-bold mb-4">Employee Dashboard</h2>
        <ViewDailyMenu />
        <SelectLunchChoice />
      </div>
    );
};

export default EmployeeView;