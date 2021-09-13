import React from "react";
import styled from "styled-components";
import HeaderComp from "./components/HeaderComp";
import TitleComp from './components/TitleComp';
import ProductCardComp from './components/ProductCardComp';

const App = () => {
	return (
		<Wrapper className="app">
			<main className="main" id='home'>
				<HeaderComp />
				<div className="banner">
					<div className="banner-inner container">
						<div className="wrapper">
							<div className="wrapper-inner">
								<h1>Equipment that are built to last</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae beatae fuga, consectetur neque earum ipsam error numquam maiores aliquid? Voluptatibus, sequi quibusdam. Officia placeat ipsam, cupiditate ducimus obcaecati debitis officiis?</p>
							</div>
						</div>
					</div>
				</div>
			</main>

			<section className='section-1' id='products'>
				<div className="container">
				<TitleComp title='Products' />
				<p className='text-center fst-italic w-75 mx-auto'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae itaque repellendus veniam maxime. Possimus reprehenderit consequatur rerum deleniti vitae, adipisci repellendus tempore dicta, quis at enim saepe optio nobis maxime?
				</p>
				<div className="products">
					{
						products.map((product, index) => (
							<ProductCardComp product={product} key={index} />
						))
					}
				</div>
				<div className='my-4 text-center'>
					<button className="btn btn-outline-success">Contact Us</button>
				</div>

				</div>

			</section>

			<section className='section-2' id='about'>
				<div className="container">
					<TitleComp title='About Us' />
				</div>
				<img src="/images/bg-2.png" className='mb-4' alt="about" />
				<div className="container mt-4">
					<p className='text-justify'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias labore eos nesciunt quia, temporibus, pariatur quisquam sunt iusto perferendis sapiente nulla distinctio voluptatem aliquam esse expedita. Autem voluptates, veritatis, voluptatum quia magni, aspernatur quasi dicta ea ipsam nihil perspiciatis error ratione incidunt labore minima tenetur! Earum sapiente, assumenda, mollitia deleniti sint dolorum blanditiis delectus in laudantium maiores itaque incidunt officia. Quod natus esse soluta explicabo impedit facere porro itaque nesciunt, iste minima ipsam eaque fugiat nisi ab et, eligendi accusantium ut libero ullam beatae, velit odit. Deserunt eum quas fugit possimus nobis necessitatibus itaque nam optio soluta iure? Laborum molestias, dolor earum asperiores quos a nihil, incidunt quia accusamus suscipit fugiat illum porro assumenda, et officia? Officiis esse, consectetur laborum quod veritatis tempore rerum porro delectus beatae unde, sed nostrum nesciunt nam! Ullam, illum deserunt. Iusto enim distinctio exercitationem, delectus laudantium dicta laborum ad deleniti! Quas fuga quia dolores possimus provident quae accusamus cum. Distinctio unde molestias eaque quaerat, quisquam tenetur blanditiis sapiente praesentium eos iusto veritatis obcaecati quas, eveniet tempore facere. Eius atque exercitationem eligendi non, amet voluptates reprehenderit ratione at magni tenetur dolorem perspiciatis qui eveniet fugiat possimus minus sint quibusdam vel accusantium reiciendis ullam velit praesentium magnam!
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita possimus dolore sed minima quia cumque eligendi sequi tempora illum corporis assumenda modi aperiam, repellendus blanditiis odio provident, molestiae ad deserunt. Natus eius et vel id commodi dolorem assumenda, aut excepturi possimus totam rerum tempora illo expedita dolor nulla incidunt, corrupti quos labore architecto molestias eaque recusandae quo. Soluta, iusto quam beatae maxime laboriosam magnam dolorum qui labore omnis praesentium quae illo vero totam quaerat accusamus nisi sunt iure fugit. At nam, ullam, nobis odio quam, quidem reprehenderit laborum earum unde in magni cum alias commodi minima suscipit et? Impedit harum repudiandae ex aliquid ad amet numquam laudantium rem fugit quam eligendi voluptates, optio magni inventore maiores nam explicabo velit officia molestiae, distinctio corrupti error. Temporibus explicabo repellat, voluptates doloremque quisquam itaque eligendi optio, eos omnis animi, ad ducimus iusto? Dicta numquam doloremque, cumque officia quia reiciendis sed alias dolorem voluptatibus. Velit explicabo totam consectetur recusandae facilis ipsa laboriosam asperiores. Aliquam quo repudiandae fugiat a totam saepe alias ea est at vel, fugit veritatis eos enim corrupti tenetur explicabo officiis porro quod voluptas temporibus? Doloribus iure veniam maxime molestiae quod, distinctio non, inventore culpa quas dicta id voluptates corrupti eius?
					</p>
				</div>
			</section>

			<section className='section-3'>
				<div className="container">
				<TitleComp title='Client' />
					<div className="logo">
						<div className="logo-1">
							<img src="/images/brand-9.svg" className='logo-brand' alt="" />
							<img src="/images/brand-10.svg" className='logo-brand' alt="" />
							<img src="/images/brand-1.svg" className='logo-brand' alt="" />
							<img src="/images/brand-5.svg" className='logo-brand' alt="" />
						</div>
						<div className="logo-2">
							<img src="/images/brand-7.svg" className='logo-brand' alt="" />
							<img src="/images/brand-3.svg" className='logo-brand' alt="" />
							<img src="/images/brand-2.png" className='logo-brand' alt="" />
						</div>
						<div className="logo-3">
							<img src="/images/brand-4.svg" className='logo-brand' alt="" />
							<img src="/images/brand-6.svg" className='logo-brand' alt="" />
							<img src="/images/brand-8.svg" className='logo-brand' alt="" />
						</div>

					</div>
				</div>
			</section>

			<section className='section-4 container' id='contact'>
				<TitleComp title='Contact' />
				<p className='text-center'>
					rrtgrtrtr
				</p>

				<div className="form-wrapper">
					<div className="inner">
						<h6 className='fw-bold'>gfgfgff</h6>
						<div className="d-flex">
							<input type="text" className='form-control border-2 border-success rounded-0' />
							<button className="btn btn-success rounded-0">
								<img src="/images/send.svg" alt="" />
							</button>
						</div>

					</div>
				</div>
			</section>
			
			<section className='section-5 text-light'>
					<footer className='container'>
						<span>Created By <a href="/" className='nav-link d-inline px-0'>John Mason</a> | &copy; 2021 All rights reserved. </span>
					</footer>
			</section>

		</Wrapper>
	);
};

export default App;

const Wrapper = styled.div`


 .section-1{
	 .products{
		 display:grid;
		 gap: 2rem;
		 @media screen and (min-width:768px){
			grid-template-columns: repeat(2, 1fr);
		 }
	 }
 }

 .section-2{
	 img{
		 width:100%
	 }
 }

 .section-3{
	 min-height:100vh;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	.logo{
		&-brand{
			width: 8.05rem;
			object-fit:contain;
		}
	}
	.logo-1{
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
	}
	.logo-2{
		margin-bottom: 2rem;
		display flex;
		justify-content: space-between;
	}
	.logo-3{
		display flex;
		justify-content: space-between;
	}
 }

 .section-4{
	 min-height: 50vh;
	 display:flex;
	 flex-direction: column;
	 .form-wrapper{
		 flex:1;
		 display: flex;
		 align-items:center;
		 justify-content: center;
		 .inner{
			 input{
				 background: #fffdf4
			 }
			 img{
				 width:100%
			 }
		 }
	 }
 }

 .section-5{
	 background: #00923f;
	 footer{
		 display: flex;
		 justify-content: center;
		 padding: 0.3rem 0;
		 .nav-link{
			 color: #9bd3b3;
		 }
	 }
 }
`;

const products = [
	{
		image: '/images/pic-2.png',
		title: 'Purity Sprayer 1',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo beatae dolores numquam suscipit explicabo molestiae eveniet enim, odio fuga aut, magnam earum neque est dignissimos nostrum atque cum dolore.`,
	},
	{
		image: '/images/pic-3.png',
		title: 'Purity Sprayer 2',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo beatae dolores numquam suscipit explicabo molestiae eveniet enim, odio fuga aut, magnam earum neque est dignissimos nostrum atque cum dolore.`,
	},
	{
		image: '/images/pic-4.png',
		title: 'Purity Sprayer 3',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo beatae dolores numquam suscipit explicabo molestiae eveniet enim, odio fuga aut, magnam earum neque est dignissimos nostrum atque cum dolore.`,
	},
	{
		image: '/images/Rectangle 6.png',
		title: 'Purity Sprayer 4',
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo beatae dolores numquam suscipit explicabo molestiae eveniet enim, odio fuga aut, magnam earum neque est dignissimos nostrum atque cum dolore.`,
	}
]
