@extends('admin.layouts.admin')

@section('title', 'Content Pages Management')

@section('content')
<div class="card">
  <div class="card-header d-flex justify-content-between align-items-center">
    <h5 class="mb-0">Content Pages</h5>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPageModal">Add New Page</button>
  </div>

  <div class="table-responsive text-nowrap">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Slug</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        @forelse($pages as $page)
        <tr>
          <td>{{ $page->id }}</td>
          <td><strong>{{ $page->title }}</strong></td>
          <td><code>{{ $page->slug }}</code></td>
          <td>
            <div class="dropdown">
              <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                <i class="ti ti-dots-vertical"></i>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editPageModal{{ $page->id }}">
                  <i class="ti ti-pencil me-1"></i> Edit
                </a>
                <form action="{{ route('admin.content-pages.destroy', $page->id) }}" method="POST" class="d-inline">
                  @csrf
                  @method('DELETE')
                  <button type="submit" class="dropdown-item text-danger" onclick="return confirm('Are you sure you want to delete this page?')">
                    <i class="ti ti-trash me-1"></i> Delete
                  </button>
                </form>
              </div>
            </div>
          </td>
        </tr>

        <!-- Edit Page Modal -->
        <div class="modal fade" id="editPageModal{{ $page->id }}" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
              <form action="{{ route('admin.content-pages.update', $page->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="modal-header">
                  <h5 class="modal-title">Edit Content Page</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label">Title</label>
                      <input type="text" name="title" class="form-control" value="{{ $page->title }}" required>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label class="form-label">Slug</label>
                      <input type="text" name="slug" class="form-control" value="{{ $page->slug }}" required>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mb-3">
                      <label class="form-label">SEO (JSON)</label>
                      <textarea name="seo" class="form-control" rows="3">{{ json_encode($page->seo, JSON_PRETTY_PRINT) }}</textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mb-3">
                      <label class="form-label">Meta Details (JSON)</label>
                      <textarea name="meta_details" class="form-control" rows="3">{{ json_encode($page->meta_details, JSON_PRETTY_PRINT) }}</textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mb-0">
                      <label class="form-label">Content (JSON)</label>
                      <textarea name="content" class="form-control" rows="6">{{ json_encode($page->content, JSON_PRETTY_PRINT) }}</textarea>
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
        <!-- /Edit Page Modal -->

        @empty
        <tr>
          <td colspan="4" class="text-center">No pages found</td>
        </tr>
        @endforelse
      </tbody>
    </table>
  </div>
</div>

<!-- Add Page Modal -->
<div class="modal fade" id="addPageModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <form action="{{ route('admin.content-pages.store') }}" method="POST">
        @csrf
        <div class="modal-header">
          <h5 class="modal-title">Add New Content Page</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label class="form-label">Title</label>
              <input type="text" name="title" class="form-control" placeholder="Page Title" required>
            </div>
            <div class="col-md-6 mb-3">
              <label class="form-label">Slug</label>
              <input type="text" name="slug" class="form-control" placeholder="page-slug" required>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mb-3">
              <label class="form-label">SEO (JSON)</label>
              <textarea name="seo" class="form-control" rows="3" placeholder='{"title": "...", "description": "..."}'></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mb-3">
              <label class="form-label">Meta Details (JSON)</label>
              <textarea name="meta_details" class="form-control" rows="3" placeholder='{"author": "..."}'></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mb-0">
              <label class="form-label">Content (JSON)</label>
              <textarea name="content" class="form-control" rows="6" placeholder='{"sections": [...]}'></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Add Page</button>
        </div>
      </form>
    </div>
  </div>
</div>
<!-- /Add Page Modal -->

@endsection
