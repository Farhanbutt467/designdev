<div class="dropdown">
  <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
    <i class="ti ti-dots-vertical"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#editMenuModal{{ $item->id }}">
      <i class="ti ti-pencil me-1"></i> Edit
    </a>
    <form action="{{ route('admin.home-menu.destroy', $item->id) }}" method="POST" class="d-inline">
      @csrf
      @method('DELETE')
      <button type="submit" class="dropdown-item text-danger" onclick="return confirm('Are you sure you want to delete this menu item?')">
        <i class="ti ti-trash me-1"></i> Delete
      </button>
    </form>
  </div>
</div>
