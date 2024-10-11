import React from 'react';
import CrudApp from "../asset/crudapp.png";
import Ninico from "../asset/Ninico.png";
import TodoList from "../asset/Todo-List.png";
import Fashion from "../asset/Fashion.png";

const Work = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="bg-white shadow-lg rounded-lg p-5 text-center transition-transform transform hover:scale-105">
          <img src={CrudApp} alt="Crud App" className="h-48 w-48 object-cover rounded-md mb-3 mx-auto" />
          <h3 className="text-lg font-semibold">
            <span>Frontend Project</span><br />
            <span className="text-sm text-gray-500">(CrudApp)</span>
          </h3>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center transition-transform transform hover:scale-105">
          <img src={Ninico} alt="Ninico" className="h-48 w-48 object-cover rounded-md mb-3 mx-auto" />
          <h3 className="text-lg font-semibold">
            <span>Frontend Project</span><br />
            <span className="text-sm text-gray-500">(Ecommerce Website)</span>
          </h3>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center transition-transform transform hover:scale-105">
          <img src={TodoList} alt="Todo List" className="h-48 w-48 object-cover rounded-md mb-3 mx-auto" />
          <h3 className="text-lg font-semibold">
            <span>Backend Project</span><br />
            <span className="text-sm text-gray-500">(Todo-List)</span>
          </h3>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center transition-transform transform hover:scale-105">
          <img src={Fashion} alt="Fashion" className="h-48 w-48 object-cover rounded-md mb-3 mx-auto" />
          <h3 className="text-lg font-semibold">
            <span>Backend Project</span><br />
            <span className="text-sm text-gray-500">(Ecommerce Website)</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Work;
