import React from "react";

const ApiInfo = () => {
  return (
    <div className="mt-8 bg-gray-800 text-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">
        <i className="fas fa-code mr-2"></i>Required Backend API Endpoints
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium text-blue-300 mb-2">GET Endpoints</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <code className="bg-gray-900 px-3 py-1 rounded mr-3">
                GET /api/health
              </code>
              <span>Server health check</span>
            </li>
            <li className="flex items-center">
              <code className="bg-gray-900 px-3 py-1 rounded mr-3">
                GET /api/tasks
              </code>
              <span>Retrieve all tasks</span>
            </li>
            <li className="flex items-center">
              <code className="bg-gray-900 px-3 py-1 rounded mr-3">
                GET /api/tasks/:id
              </code>
              <span>Retrieve single task</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-green-300 mb-2">Other Endpoints</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <code className="bg-gray-900 px-3 py-1 rounded mr-3">
                POST /api/tasks
              </code>
              <span>Create new task</span>
            </li>
            <li className="flex items-center">
              <code className="bg-gray-900 px-3 py-1 rounded mr-3">
                PUT /api/tasks/:id
              </code>
              <span>Update existing task</span>
            </li>
            <li className="flex items-center">
              <code className="bg-gray-900 px-3 py-1 rounded mr-3">
                DELETE /api/tasks/:id
              </code>
              <span>Delete a task</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApiInfo;
