@extends('admin.layouts.admin')

@section('title', 'Admin Settings')

@section('content')
<div class="row">
    <div class="col-md-12">
        <ul class="nav nav-pills flex-column flex-md-row mb-6 gap-2 gap-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0);"><i class="ti ti-user-check me-1_5 ti-sm"></i> Account</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);"><i class="ti ti-lock me-1_5 ti-sm"></i> Security</a>
            </li>
        </ul>
        <div class="card mb-6">
            <h5 class="card-header">Profile Details</h5>
            <div class="card-body">
                <form id="formAccountSettings" method="POST" onsubmit="return false">
                    <div class="row g-6">
                        <div class="col-md-6 mb-3">
                            <label for="firstName" class="form-label">Full Name</label>
                            <input class="form-control" type="text" id="firstName" name="firstName" value="{{ Auth::user()->name ?? 'Admin' }}" autofocus />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="email" class="form-label">E-mail</label>
                            <input class="form-control" type="text" id="email" name="email" value="{{ Auth::user()->email ?? 'admin@example.com' }}" placeholder="john.doe@example.com" disabled />
                        </div>
                    </div>
                    <div class="mt-6">
                        <button type="submit" class="btn btn-primary me-3">Save changes</button>
                        <button type="reset" class="btn btn-label-secondary">Discard</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
