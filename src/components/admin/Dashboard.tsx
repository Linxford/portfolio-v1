import React from 'react';
import { Users, FolderKanban, MessageSquare, Activity } from 'lucide-react';

const stats = [
  { label: 'Total Projects', value: '12', icon: FolderKanban, color: 'bg-blue-500' },
  { label: 'Active Services', value: '6', icon: Activity, color: 'bg-green-500' },
  { label: 'Client Reviews', value: '24', icon: MessageSquare, color: 'bg-purple-500' },
  { label: 'Total Clients', value: '18', icon: Users, color: 'bg-orange-500' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="text-sm">New project added: Mobile App UI</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left">
              <FolderKanban className="mb-2 text-blue-500" size={24} />
              <p className="text-sm font-medium">Add New Project</p>
            </button>
            <button className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left">
              <MessageSquare className="mb-2 text-purple-500" size={24} />
              <p className="text-sm font-medium">Manage Reviews</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}