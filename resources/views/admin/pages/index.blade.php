@extends('admin.layouts.admin')

@section('title', 'Pages CMS')

@section('content')
<div class="card">
  <div class="card-header d-flex justify-content-between align-items-center">
    <h5 class="mb-0">Page List</h5>
    <a href="{{ route('admin.pages.create') }}" class="btn btn-primary">Create New Page</a>
  </div>
  <div class="table-responsive text-nowrap">
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Slug</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        @foreach($pages as $page)
        <tr>
          <td>{{ $page->title }}</td>
          <td><code>/{{ $page->slug }}</code></td>
          <td>
            <span class="badge bg-label-{{ $page->status == 'published' ? 'success' : 'warning' }}">
                {{ ucfirst($page->status) }}
            </span>
          </td>
          <td>
            <div class="d-flex gap-2">
                <a href="{{ route('admin.pages.edit', $page->id) }}" class="btn btn-sm btn-info">Edit</a>
                <form action="{{ route('admin.pages.destroy', $page->id) }}" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="button" class="btn btn-sm btn-danger delete-confirm">Delete</button>
                </form>
            </div>
          </td>
        </tr>
        @endforeach
      </tbody>
    </table>
  </div>
  <div class="card-footer">
    {{ $pages->links() }}
  </div>
</div>
@endsection
