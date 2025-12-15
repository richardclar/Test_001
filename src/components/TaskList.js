import React from "react";

const TaskList = ({ tasks, loading, onDeleteTask, onToggleComplete }) => {
  // In TaskList.js
const getPriorityClass = (priority) => {
  const classes = {
    'high': 'bg-red-100 text-red-800',
    'medium': 'bg-yellow-100 text-yellow-800',
    'low': 'bg-green-100 text-green-800'
  };
  return classes[priority] || 'bg-gray-100 text-gray-800';
};

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            <i className="fas fa-list-check text-purple-500 mr-2"></i>Task List
          </h2>
          <div className="text-sm text-gray-500">
            <span>0</span> tasks
          </div>
        </div>

        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p className="text-gray-600">Waiting for backend connection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          <i className="fas fa-list-check text-purple-500 mr-2"></i>Task List
        </h2>
        <div className="text-sm text-gray-500">
          <span>{tasks.length}</span> tasks
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="text-center py-12">
          <i className="fas fa-clipboard-list text-gray-300 text-5xl mb-4"></i>
          <p className="prose prose-2xl text-gray-500">
            No tasks found. Create your first task!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id || task._id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
            >
              <div className="flex justify-between">
                <h3 className="font-medium text-gray-800">
                  {task.title || "Untitled Task"}
                </h3>
                <span
                  className={`priority-badge ${getPriorityClass(
                    task.priority
                  )} text-xs px-3 py-1 rounded-full`}
                >
                  {task.priority || "medium"}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                {task.description || "No description provided"}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-500">
                  <i className="fas fa-tag mr-1"></i>
                  {task.category || "other"}
                  {task.createdAt ? ` • ${formatDate(task.createdAt)}` : ""}
                </span>
                <div className="space-x-3">
                  <button
                    onClick={() => onToggleComplete(task.id || task._id)}
                    className="text-sm text-green-500 hover:text-green-700"
                  >
                    <i className="fas fa-check mr-1"></i>Complete
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id || task._id)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    <i className="fas fa-trash mr-1"></i>Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
