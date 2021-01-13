import React , {Fragment} from "react";

const showLoading = () => {
  return (
    <Fragment>
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-danger" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-warning" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </Fragment>
  );
};

export default showLoading