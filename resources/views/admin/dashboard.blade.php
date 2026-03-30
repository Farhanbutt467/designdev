@extends('admin.layouts.admin')

@section('title', 'Dashboard')

@section('vendor-css')
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/libs/apex-charts/apex-charts.css') }}" />
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/libs/swiper/swiper.css') }}" />
@endsection

@section('page-css')
    <link rel="stylesheet" href="{{ asset('admin-assets/vendor/css/pages/cards-advance.css') }}" />
@endsection

@section('content')
<div class="row g-6">
    <!-- Welcome Card -->
    <div class="col-lg-6">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Welcome back, {{ Auth::user()->name ?? 'Admin' }}! 🎉</h5>
                <p class="mb-4">You have done 68% more sales today. Check your new badge in your profile.</p>
                <a href="javascript:;" class="btn btn-primary">View Badges</a>
            </div>
        </div>
    </div>
    
    <!-- Statistics Cards -->
    <div class="col-lg-3 col-sm-6">
        <div class="card h-100 text-center">
            <div class="card-body">
                <div class="badge bg-label-primary p-2 mb-2"><i class="ti ti-users ti-md"></i></div>
                <h4 class="mb-0">1.2k</h4>
                <small>Total Users</small>
            </div>
        </div>
    </div>
    
    <div class="col-lg-3 col-sm-6">
        <div class="card h-100 text-center">
            <div class="card-body">
                <div class="badge bg-label-success p-2 mb-2"><i class="ti ti-currency-dollar ti-md"></i></div>
                <h4 class="mb-0">$4.5k</h4>
                <small>Revenue</small>
            </div>
        </div>
    </div>
</div>
@endsection

@section('vendor-js')
    <script src="{{ asset('admin-assets/vendor/libs/apex-charts/apexcharts.js') }}"></script>
    <script src="{{ asset('admin-assets/vendor/libs/swiper/swiper.js') }}"></script>
@endsection

@section('page-js')
    <script src="{{ asset('admin-assets/js/dashboards-analytics.js') }}"></script>
@endsection
