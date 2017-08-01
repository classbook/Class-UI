import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ClassUI} from '../ClassUI';
import {NavBar, NavbarRemain} from '../Navbar';
import {Content} from '../Content';
import {Form} from '../Components/Form';
import {Text} from '../Components/Form/Text';
import {Formlayout} from '../Components/Formlayout';
import {TextField} from '../Components/Formlayout/TextField';
import {Checkbox} from '../Components/Form/Checkbox';
import {Flash} from '../Components/Flash';
import {Dropdown} from '../Components/Dropdown';
import {MAnim} from '../Helper/Animation';
import {Layout, Section} from '../Components/Layout';
import {MediaQuery} from '../Helper/MediaQuery';

ReactDOM.render(<ClassUI contentWidth={1286}>
			<NavBar logo="Alumnies">
				<NavbarRemain />
				<div className="button stretch">Kittu</div>
				<Dropdown button="Settings" push="left">
					<li>Kishore</li>
					<li>Kishore</li>
					<li>Kishore</li>
				</Dropdown>
			</NavBar>
			<Content>
				<MediaQuery media="screen and (min-width: 500px)">
					<Layout gutter={15} margin={10} ccard justify="start" mediaNoMatch={{
						direction: "column",
						cwidth: "100%",
						gutter: 10,
						margin: 0
					}}>
						<Section minWidth={250} >Section1</Section>
						<Section remain >Section1</Section>
						<Section minWidth={250} >Section1</Section>
					</Layout>
				</MediaQuery>
			</Content>
	</ClassUI>,
	document.getElementById('app')
);

Flash.flash((dismiss: Function)=>{
	return <Formlayout label="Personal Details" onSubmit={()=>{dismiss();}}>
		<a href="" className="button">Kishore</a>
		<Dropdown button="Drop" push="left">
			<li>Kishore List</li>
			<li>Kishore List</li>
			<li>Kishore List</li>
			<li>Kishore List</li>
			<li>Kishore List</li>
		</Dropdown>
		<TextField name="name">Name</TextField>
		<TextField name="father_name">Father's Name</TextField>
		<TextField name="mother_name">Mother's Name</TextField>
		<Checkbox name="Accept">Kishore</Checkbox>
		<input type="submit" />
</Formlayout>});