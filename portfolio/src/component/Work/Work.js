import React from 'react';
import CrudApp from "../asset/crudapp.png";
import Ninico from "../asset/Ninico.png";
import TodoList from "../asset/Todo-List.png";
import Fashion from "../asset/Fashion.png";

const Work = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200" >     
      <div className="flex flex-wrap justify-center items-center gap-5 p-5">
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src={CrudApp} alt="" className="h-48 w-48 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold">
            <span>Frontend Project</span><br />
            <span className="text-sm text-gray-500">(CrudApp)</span>
          </h3>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src={Ninico} alt="" className="h-48 w-48 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold">
            <span>Frontend Project</span><br />
            <span className="text-sm text-gray-500">(Ecommerce Website)</span>
          </h3>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src={TodoList} alt="" className="h-48 w-48 object-cover rounded-md mb-3" />
          <h3 className="text-lg font-semibold">
            <span>Backend Project</span><br />
            <span className="text-sm text-gray-500">(Todo-List)</span>
          </h3>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-5 text-center">
          <img src={Fashion} alt="" className="h-48 w-48 object-cover rounded-md mb-3" />
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
