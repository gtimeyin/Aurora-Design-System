import React, { useState, useCallback } from 'react';
import { Table } from '../components/Table';
import { SortDirection } from '../components/Table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

// Generate sample data
const allUsers: User[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: ['Admin', 'Editor', 'Viewer'][Math.floor(Math.random() * 3)],
  status: ['active', 'inactive', 'pending'][Math.floor(Math.random() * 3)] as 'active' | 'inactive' | 'pending',
}));

const ITEMS_PER_PAGE = 10;

export const TableDemo: React.FC = () => {
  const [displayedUsers, setDisplayedUsers] = useState<User[]>(() => allUsers.slice(0, ITEMS_PER_PAGE));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const loadMore = useCallback(async () => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const currentLength = displayedUsers.length;
    const nextUsers = allUsers.slice(currentLength, currentLength + ITEMS_PER_PAGE);
    setDisplayedUsers(prev => [...prev, ...nextUsers]);
    
    // Check if we've loaded all users
    if (currentLength + ITEMS_PER_PAGE >= allUsers.length) {
      setHasMore(false);
    }
    
    setLoading(false);
  }, [displayedUsers.length]);

  const columns = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      sortable: true,
      sorter: (a: User, b: User) => a.id - b.id,
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      width: 200,
      sortable: true,
      filterable: true,
      filters: [
        { text: 'User 1', value: 'User 1' },
        { text: 'User 2', value: 'User 2' },
        { text: 'User 3', value: 'User 3' },
      ],
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      sortable: true,
    },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      align: 'center' as const,
      sortable: true,
      filterable: true,
      filters: [
        { text: 'Admin', value: 'Admin' },
        { text: 'Editor', value: 'Editor' },
        { text: 'Viewer', value: 'Viewer' },
      ],
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      render: (status: string) => {
        const statusColors = {
          active: 'badge-success',
          inactive: 'badge-error',
          pending: 'badge-warning',
        };
        
        return (
          <span className={`badge badge-sm badge-solid ${statusColors[status as keyof typeof statusColors]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      },
      align: 'center' as const,
      sortable: true,
      filterable: true,
      filters: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
        { text: 'Pending', value: 'pending' },
      ],
    },
  ];

  const handleTableChange = (pagination: any, filters: any, sorter: SortDirection | SortDirection[]) => {
    console.log('Table changed:', { pagination, filters, sorter });
  };

  const handleFilter = (filters: Record<string, any[]>) => {
    console.log('Filters changed:', filters);
  };

  const handleSelectionChange = (keys: React.Key[], rows: User[]) => {
    console.log('Selected rows:', rows);
    setSelectedRowKeys(keys);
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Table Component</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Table with Load More</h2>
        <Table 
          columns={columns} 
          data={displayedUsers}
          hasMore={hasMore}
          onLoadMore={loadMore}
          loadingMore={loading}
        />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Bordered Table</h2>
        <Table columns={columns} data={displayedUsers} bordered />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Striped Table</h2>
        <Table columns={columns} data={displayedUsers} striped />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Hoverable Table</h2>
        <Table columns={columns} data={displayedUsers} hoverable />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Compact Table</h2>
        <Table columns={columns} data={displayedUsers} compact />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Loading Table</h2>
        <Table columns={columns} data={displayedUsers} loading />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Empty Table</h2>
        <Table columns={columns} data={[]} />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Combined Features</h2>
        <Table 
          columns={columns} 
          data={displayedUsers} 
          bordered 
          striped 
          hoverable 
          onRowClick={(record) => alert(`Clicked on ${record.name}`)}
        />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sortable Table</h2>
        <Table 
          columns={columns} 
          data={displayedUsers} 
          onChange={handleTableChange}
          defaultSortKey="id"
          defaultSortOrder="ascend"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table with Filters</h2>
        <Table 
          columns={columns} 
          data={displayedUsers}
          hasMore={hasMore}
          onLoadMore={loadMore}
          loadingMore={loading}
          onFilter={handleFilter}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Selectable Table</h2>
        <Table 
          columns={columns} 
          data={displayedUsers}
          selectable
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={handleSelectionChange}
          hasMore={hasMore}
          onLoadMore={loadMore}
          loadingMore={loading}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Row Selection</h2>
        <Table 
          columns={columns} 
          data={displayedUsers}
          selectable
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={handleSelectionChange}
          hoverable
        />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Combined Features with Selection</h2>
        <Table 
          columns={columns} 
          data={displayedUsers} 
          striped 
          hoverable 
          selectable
          selectedRowKeys={selectedRowKeys}
          onSelectionChange={handleSelectionChange}
          onChange={handleTableChange}
          defaultSortKey="id"
          defaultSortOrder="ascend"
        />
      </section>
    </div>
  );
}; 