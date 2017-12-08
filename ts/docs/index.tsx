import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ClassUI} from '../ClassUI';
import {Content} from '../Content';
import {NavBar, NavbarRemain} from '../Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import {Dropdown} from '../Components/Dropdown';
import {Demo1} from './Demo1';
import {Demo2} from './Demo2';
import { Feedback } from '../Components/Feedback';

ReactDOM.render(<Router >
		<ClassUI contentWidth={1024}>
			<NavBar logo="Class-UI" fixed>
				<NavbarRemain />
				<Dropdown button="Playground" push="left">
				<li>Typescript</li>
				<li>Canvas2D</li>
				<li>Demo</li>
			</Dropdown>
			<Dropdown button="This is a very big task button" buttonMaxWidth={100} push="left">
			<li onClick={()=>Feedback.show("Hello World. :)", "success")} className="noTextWrap">My Tasks this is a very big text</li>
			<li onClick={()=>Feedback.show("Hello World.", "error")}>Manage Tasks</li>
			<li>Dashboard (TODO)</li>
			</Dropdown>
			<Dropdown button="tasks" push="left">
				<li>My Tasks</li>
				<li>Manage Tasks</li>
				<li>Dashboard (TODO)</li>
			</Dropdown>
			<div className="button">Kittu</div>
			</NavBar>
			<Content fullHeight>
				<Demo1 />
			</Content>
		</ClassUI>
	</Router>,
	document.getElementById('app')
);