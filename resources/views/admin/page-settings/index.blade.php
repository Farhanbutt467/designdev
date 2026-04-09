@extends('admin.layouts.admin')

@section('title', 'Page Settings Management')

@section('content')
<div class="card">
  <div class="card-header d-flex justify-content-between align-items-center">
    <h5 class="mb-0">Page Settings List</h5>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addSettingModal">Add New Setting</button>
  </div>

  <div class="table-responsive text-nowrap">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Slug</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        @forelse($settings as $setting)
        <tr>
          <td>{{ $setting->id }}</td>
          <td>{{ $setting->title }}</td>
          <td><code>{{ $setting->slug }}</code></td>
          <td>{{ Str::limit($setting->value, 50) }}</td>
          <td>
            <div class="dropdown">
              <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                <i class="ti ti-dots-vertical"></i>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editSettingModal{{ $setting->id }}">
                  <i class="ti ti-pencil me-1"></i> Edit
                </a>
                <form action="{{ route('admin.page-settings.destroy', $setting->id) }}" method="POST" class="d-inline">
                  @csrf
                  @method('DELETE')
                  <button type="submit" class="dropdown-item text-danger" onclick="return confirm('Are you sure you want to delete this setting?')">
                    <i class="ti ti-trash me-1"></i> Delete
                  </button>
                </form>
              </div>
            </div>
          </td>
        </tr>

        <!-- Edit Setting Modal -->
        <div class="modal fade" id="editSettingModal{{ $setting->id }}" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <form action="{{ route('admin.page-settings.update', $setting->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="modal-header">
                  <h5 class="modal-title">Edit Page Setting</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col mb-3">
                      <label class="form-label">Title</label>
                      <input type="text" name="title" class="form-control" value="{{ $setting->title }}" required>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-3">
                      <label class="form-label">Slug</label>
                      <input type="text" name="slug" class="form-control" value="{{ $setting->slug }}" required>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-0">
                      <label class="form-label">Value</label>
                      <textarea name="value" class="form-control" rows="4">{{ $setting->value }}</textarea>
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
        <!-- /Edit Setting Modal -->

        @empty
        <tr>
          <td colspan="5" class="text-center">No settings found</td>
        </tr>
        @endforelse
      </tbody>
    </table>
  </div>
</div>

<!-- Add Setting Modal -->
<div class="modal fade" id="addSettingModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <form action="{{ route('admin.page-settings.store') }}" method="POST">
        @csrf
        <div class="modal-header">
          <h5 class="modal-title">Add New Page Setting</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Title</label>
              <input type="text" name="title" class="form-control" placeholder="Setting Title" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Slug</label>
              <input type="text" name="slug" class="form-control" placeholder="setting-slug" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-0">
              <label class="form-label">Value</label>
              <textarea name="value" class="form-control" placeholder="Setting Value" rows="4"></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Add Setting</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Add Setting Modal -->

@endsection
