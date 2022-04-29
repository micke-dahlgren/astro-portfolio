import { h } from 'preact';
import Styles from './styles.module.scss';
import Button from '../Button';
function Nav() {
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logolink} href="/">
				<div className={Styles.monogram}>JW</div>
			</a>
			<a className={Styles.social} href="/projects">
				Projects
			</a>
			<a className={Styles.social} href="/blog">
				Blog
			</a>
			<a className={Styles.social} href="/about">
				About
			</a>
			<a className={Styles.social} href="/contact">
				<Button>Contact</Button>
			</a>
		</nav>
	);
}
export default Nav;
