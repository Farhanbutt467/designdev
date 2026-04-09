@extends('admin.layouts.admin')

@section('title', 'Home Menu Management')

@section('content')
<div class="card">
  <div class="card-header d-flex justify-content-between align-items-center">
    <h5 class="mb-0">Home Menu Items</h5>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMenuModal">Add New Menu Item</button>
  </div>

  <div class="table-responsive text-nowrap">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Parent</th>
          <th>Sub-items</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="table-border-bottom-0">
        @forelse($menus as $menu)
        <tr>
          <td>{{ $menu->id }}</td>
          <td><strong>{{ $menu->title }}</strong></td>
          <td><span class="badge bg-label-primary">Root</span></td>
          <td>{{ $menu->submenus->count() }} sub-items</td>
          <td>
            @include('admin.home-menu.partials.actions', ['item' => $menu])
          </td>
        </tr>
        @if($menu->submenus->count() > 0)
          @foreach($menu->submenus as $submenu)
            <tr>
              <td>{{ $submenu->id }}</td>
              <td><span class="ms-4">-- {{ $submenu->title }}</span></td>
              <td><code>{{ $menu->title }}</code></td>
              <td>-</td>
              <td>
                @include('admin.home-menu.partials.actions', ['item' => $submenu])
              </td>
            </tr>
          @endforeach
        @endif
        @empty
        <tr>
          <td colspan="5" class="text-center">No menu items found</td>
        </tr>
        @endforelse
      </tbody>
    </table>
  </div>
</div>

<!-- Modals for each item -->
@foreach($allMenus as $item)
<!-- Edit Menu Modal -->
<div class="modal fade" id="editMenuModal{{ $item->id }}" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <form action="{{ route('admin.home-menu.update', $item->id) }}" method="POST">
        @csrf
        @method('PUT')
        <div class="modal-header">
          <h5 class="modal-title">Edit Menu Item</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Title</label>
              <input type="text" name="title" class="form-control" value="{{ $item->title }}" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Parent Menu</label>
              <select name="parent" class="form-select">
                <option value="">None (Root)</option>
                @foreach($allMenus as $parentOption)
                  @if($parentOption->id != $item->id)
                    <option value="{{ $parentOption->id }}" {{ $item->parent == $parentOption->id ? 'selected' : '' }}>
                      {{ $parentOption->title }}
                    </option>
                  @endif
                @endforeach
              </select>
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
@endforeach

<!-- Add Menu Modal -->
<div class="modal fade" id="addMenuModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <form action="{{ route('admin.home-menu.store') }}" method="POST">
        @csrf
        <div class="modal-header">
          <h5 class="modal-title">Add New Menu Item</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Title</label>
              <input type="text" name="title" class="form-control" placeholder="Menu Title" required>
            </div>
          </div>
          <div class="row">
            <div class="col mb-3">
              <label class="form-label">Parent Menu</label>
              <select name="parent" class="form-select">
                <option value="">None (Root)</option>
                @foreach($allMenus as $parentOption)
                  <option value="{{ $parentOption->id }}">{{ $parentOption->title }}</option>
                @endforeach
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Add Menu Item</button>
        </div>
      </form>
    </div>
  </div>
</div>

@endsection
