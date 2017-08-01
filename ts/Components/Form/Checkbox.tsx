import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IProps {
	name: string,
	send_value?: (value: any)=>any,
	children: any,
	inline?: boolean
};

export class Checkbox extends React.Component<IProps, any> {
	private checkbox: HTMLInputElement | null;
	constructor() {
		super();
		this.send = this.send.bind(this);
		this.change = this.change.bind(this);
	}

	send(value: boolean) {
		if (this.props.send_value){
			this.props.send_value({
				name: this.props.name,
				value
			});
		}
	}
	change(e: React.ChangeEvent<HTMLInputElement>)
	{
		this.send(e.target.checked);
	}
	componentDidMount() {
		if (this.checkbox) {
			this.send(this.checkbox.checked);
		}
	}
	render() {
		return <label className={"checkbox"+(this.props.inline?" inline":"")}>
			<input type="checkbox" ref={(ref)=>{this.checkbox=ref;}} value="true" onChange={this.change} name={this.props.name}/>
			<div className="fake">✔</div>
			{this.props.children}
		</label>;
	}
};