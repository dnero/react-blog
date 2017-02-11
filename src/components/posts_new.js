import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';


class PostsNew extends Component {
	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;

		return (
			<form onsubmit={handleSubmit(this.props.createPost)}>
				<h3>Create a new post</h3>
				<div className="form-group">
					<label htmlFor="">Title</label>
					<input {...title} type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="">Categories</label>
					<input {...categories} type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="">Content</label>
					<textarea {...content} className="form-control" />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	};
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);