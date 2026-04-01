@extends('admin.layouts.admin')

@section('title', 'Edit Page: ' . $page->title)

@section('content')
<div class="row">
  <div class="col-md-12">
    <div class="card mb-6">
      <h5 class="card-header">Edit Page: {{ $page->title }}</h5>
      <div class="card-body">
        <form action="{{ route('admin.pages.update', $page->id) }}" method="POST">
          @csrf
          @method('PUT')
          <div class="row g-6 mb-4">
            <div class="col-md-6 mb-3">
              <label for="title" class="form-label">Page Title</label>
              <input type="text" class="form-control" name="title" id="title" value="{{ $page->title }}" required />
            </div>
            <div class="col-md-6 mb-3">
              <label for="slug" class="form-label">Page Slug (URL)</label>
              <input type="text" class="form-control" name="slug" id="slug" value="{{ $page->slug }}" required />
            </div>
          </div>

          <div class="mb-3">
            <label for="status" class="form-label">Status</label>
            <select name="status" class="form-select">
              <option value="published" {{ $page->status == 'published' ? 'selected' : '' }}>Published</option>
              <option value="draft" {{ $page->status == 'draft' ? 'selected' : '' }}>Draft</option>
            </select>
          </div>

          <hr class="my-6">
          <h5 class="mb-4 d-flex justify-content-between align-items-center">
            Page Sections
            <button type="button" class="btn btn-sm btn-label-primary" id="add-section">Add Section</button>
          </h5>

          <div id="sections-container" class="mb-4">
            @foreach($page->content as $index => $section)
            <div class="card border border-primary mb-4 section-item" data-index="{{ $index }}">
                <div class="card-header py-2 d-flex justify-content-between align-items-center bg-label-primary">
                    <h6 class="mb-0 text-white">Section #{{ $index + 1 }}</h6>
                    <button type="button" class="btn btn-sm btn-icon btn-danger remove-section"><i class="ti ti-trash"></i></button>
                </div>
                <div class="card-body pt-4">
                    <div class="row g-4 mb-3">
                        <div class="col-md-6">
                            <label class="form-label">Section Type</label>
                            <select name="sections[{{ $index }}][type]" class="form-select section-type">
                                <option value="hero" {{ $section['type'] == 'hero' ? 'selected' : '' }}>Hero Section</option>
                                <option value="text" {{ $section['type'] == 'text' ? 'selected' : '' }}>Text Block</option>
                                <option value="cards" {{ $section['type'] == 'cards' ? 'selected' : '' }}>Feature Cards</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="section-content-fields">
                        <div class="mb-3">
                           <label class="form-label">Heading</label>
                           <input type="text" name="sections[{{ $index }}][heading]" class="form-control" value="{{ $section['heading'] ?? '' }}">
                        </div>
                        <div class="mb-3">
                           <label class="form-label">Content/Body</label>
                           <textarea name="sections[{{ $index }}][body]" class="form-control" rows="3">{{ $section['body'] ?? '' }}</textarea>
                        </div>
                        <div class="mb-3">
                           <label class="form-label">Image URL (Optional)</label>
                           <input type="text" name="sections[{{ $index }}][image]" class="form-control" value="{{ $section['image'] ?? '' }}">
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
          </div>

          <div class="mt-6">
            <button type="submit" class="btn btn-primary me-3">Update Page</button>
            <a href="{{ route('admin.pages.index') }}" class="btn btn-label-secondary">Cancel</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<template id="section-template">
    <div class="card border border-primary mb-4 section-item" data-index="{INDEX}">
        <div class="card-header py-2 d-flex justify-content-between align-items-center bg-label-primary">
            <h6 class="mb-0 text-white">Section #{NUMBER}</h6>
            <button type="button" class="btn btn-sm btn-icon btn-danger remove-section"><i class="ti ti-trash"></i></button>
        </div>
        <div class="card-body pt-4">
            <div class="row g-4 mb-3">
                <div class="col-md-6">
                    <label class="form-label">Section Type</label>
                    <select name="sections[{INDEX}][type]" class="form-select section-type">
                        <option value="hero">Hero Section</option>
                        <option value="text">Text Block</option>
                        <option value="cards">Feature Cards</option>
                    </select>
                </div>
            </div>
            
            <div class="section-content-fields">
                <div class="mb-3">
                   <label class="form-label">Heading</label>
                   <input type="text" name="sections[{INDEX}][heading]" class="form-control">
                </div>
                <div class="mb-3">
                   <label class="form-label">Content/Body</label>
                   <textarea name="sections[{INDEX}][body]" class="form-control" rows="3"></textarea>
                </div>
                <div class="mb-3">
                   <label class="form-label">Image URL (Optional)</label>
                   <input type="text" name="sections[{INDEX}][image]" class="form-control" placeholder="https://...">
                </div>
            </div>
        </div>
    </div>
</template>

@endsection

@section('page-js')
<script>
    let sectionCount = {{ count($page->content) }};
    const container = document.getElementById('sections-container');
    const template = document.getElementById('section-template').innerHTML;

    document.getElementById('add-section').addEventListener('click', function() {
        let html = template
            .replace(/{INDEX}/g, sectionCount)
            .replace(/{NUMBER}/g, sectionCount + 1);
        
        const div = document.createElement('div');
        div.innerHTML = html;
        container.appendChild(div.firstElementChild);
        sectionCount++;
    });

    container.addEventListener('click', function(e) {
        if (e.target.closest('.remove-section')) {
            e.target.closest('.section-item').remove();
        }
    });

    document.getElementById('title').addEventListener('input', function() {
        const slug = this.value.toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
        document.getElementById('slug').value = slug;
    });
</script>
@endsection
