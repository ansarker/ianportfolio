import React, { Component } from 'react'
import Sidebar from './components/Sidebar';
import Content from './components/Content';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: {
				name: 'Anis Sarker',
				dept: 'Department of Computer Science & Engineering',
				institute: 'Independent University, Bangladesh(IUB)',
				email: 'shahidsarker95@hotmail.com'
			},
			content: {
				about: 'I am a Research Assistant at AGenCy Lab @IUB. I received my Bachelor of Science degree in \
				Computer Science at Independent University, Bangladesh(IUB). I have a very broad research interest \
				in Machine Learning and Computer Vision. My current research involves in land use land cover segmentation \
				using high spatial resolution satellite images.',

				publications: [
					{
						id: 1,
						title: 'A.B.S Nayeem, A Sarkar, A.A Ali, M.A. Amin, A.K.M Rahman, "LULC Segmentation of RGB Satellite \
						Image Using FCN-8", 3rd SLAAI International Conference on Artificial Intelligence, Sri Lanka , 2019'
					},
				],
				interests: [
					{id: 1, name: 'Machine Learning'},
					{id: 2, name: 'Computer Vision'},
					{id: 3, name: 'Artificial Intelligence'},
					{id: 4, name: 'Psychology'},
					{id: 5, name: 'Philosophy'},
				],
				skills: [
					{id: 1, type: 'Programming', name: 'Python, MATLAB'},
					{id: 2, type: 'Programming', name: 'Java, C/ C++'},
					{id: 3, type: 'Web & Mobile App Development', name: 'JavaScript, Android'},
					{id: 4, type: 'Web & Mobile App Development', name: 'ReactJS/ React Native'},
					{id: 5, type: 'Web & Mobile App Development', name: 'NodeJS'},
					{id: 6, type: 'Framework/Libraries', name: 'Tensorflow, PyTorch, Keras'},
					{id: 7, type: 'Framework/Libraries', name: 'Numpy, Matplotlib, Seaborn, OpenCV, Scipy, Scikit-learn, Pillow, Pandas'},
					{id: 8, type: 'Others', name: 'Linux Shell Script'},
					{id: 9, type: 'Others', name: 'SSH'},
					{id: 10, type: 'Others', name: 'LaTex'}
				]
			}

		}
	}

	render() {
		return (
			<div>
				<Sidebar info={this.state.info}/>
				<Content content={this.state.content}/>
			</div>
		);
	}
}
