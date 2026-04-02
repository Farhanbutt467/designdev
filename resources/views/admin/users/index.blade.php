@extends('admin.layouts.admin')

@section('title', 'Users Management')

@section('content')
<div class="card">
  <div class="card-header d-flex justify-content-between align-items-center">
    <h5 class="mb-0">User List</h5>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal">Add New User</button>
  </div>

  @if(session('success'))
  <div class="alert alert-success mx-4">
      {{ session('success') }}
  </div>
  @endif

  @if(session('error'))
  <div class="alert alert-danger mx-4">
      {{ session('error') }}
  </div>
  @endif
  
  @if ($errors->any())
  <div class="alert alert-danger mx-4">
      <ul class="mb-0">
          @foreach ($errors->all() as $error)
              <li>{{ $error }}</li>
          @endforeach
      </ul>
  </div>
  @endif

  <div class="table-responsive text-nowrap">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        @forelse($users as $user)
        <tr>
          <td>{{ $user->id }}</td>
          <td>{{ $user->name }}</td>
          <td>{{ $user->email }}</td>
          <td>
            @if($user->status === 'active')
                <span class="badge bg-label-success">Active</span>
            @else
                <span class="badge bg-label-danger">Inactive</span>
            @endif
          </td>
          <td>
            <div class="dropdown">
              <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                <i class="ti ti-dots-vertical"></i>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editUserModal{{ $user->id }}">
                    <i class="ti ti-pencil me-1"></i> Edit
                </a>
                
                @if(auth()->id() !== $user->id)
                <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST" class="d-inline">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="dropdown-item {{ $user->status === 'active' ? 'text-danger' : 'text-success' }}" onclick="return confirm('Are you sure you want to change this user\'s status?')">
                        <i class="ti ti-{{ $user->status === 'active' ? 'x' : 'check' }} me-1"></i> {{ $user->status === 'active' ? 'Deactivate' : 'Activate' }}
                    </button>
                </form>
                @endif
              </div>
            </div>
          </td>
        </tr>

        <!-- Edit User Modal -->
        <div class="modal fade" id="editUserModal{{ $user->id }}" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <form action="{{ route('admin.users.update', $user->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="modal-header">
                  <h5 class="modal-title" id="editUserModalLabel{{ $user->id }}">Edit User</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col mb-3">
                      <label for="name{{ $user->id }}" class="form-label">Name</label>
                      <input type="text" id="name{{ $user->id }}" name="name" class="form-control" value="{{ $user->name }}" required>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-3">
                      <label for="email{{ $user->id }}" class="form-label">Email</label>
                      <input type="email" id="email{{ $user->id }}" name="email" class="form-control" value="{{ $user->email }}" required>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-0">
                      <label for="password{{ $user->id }}" class="form-label">Password (leave blank to keep current)</label>
                      <input type="password" id="password{{ $user->id }}" name="password" class="form-control" placeholder="••••••••">
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- /Edit User Modal -->

        @empty
        <tr>
            <td colspan="5" class="text-center">No users found</td>
        </tr>
        @endforelse
      </tbody>
    </table>
  </div>
</div>

<!-- Add User Modal -->
<div class="modal fade" id="addUserModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <form action="{{ route('admin.users.store') }}" method="POST">
        @csrf
        <div class="modal-header">
          <h5 class="modal-title" id="addUserModalLabel">Add New User</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" name="name" class="form-control" placeholder="John Doe" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" name="email" class="form-control" placeholder="john@example.com" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-0">
              <label for="password" class="form-label">Password</label>
              <input type="password" id="password" name="password" class="form-control" placeholder="••••••••" required minlength="8">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Add User</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Add User Modal -->

@endsection
