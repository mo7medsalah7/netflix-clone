import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
	const [session, loading] = useSession();

	return (
		<div
			className="flex flex-col overflow-x-hidden items-center justify-center min-h-screen bg-black"
			style={{
				backgroundImage:
					"linear-gradient(rgba(0, 0, 0, 60%), rgba(0, 0, 0, 60%)), url(/bg-img.jpg)",
			}}
		>
			<Head>
				<title>Netflix Clone</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&display=swap"
					rel="stylesheet"
				/>
			</Head>

			{/* Header  */}
			<header className="flex justify-between w-full px-8 py-4">
				{/* // Applicatoon Logo */}
				<div>
					<svg
						viewBox="0.238 0.034 919.406 248.488"
						xmlns="http://www.w3.org/2000/svg"
						className="w-32"
					>
						<path
							d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
							fill="#e50914"
						/>
					</svg>
				</div>

				{/* div wraps signed-in user name and button  */}
				<div className="flex sm:flex-row xs:flex-col text-center justify-center items-center space-x-4">
					{/* signed-in user if there's a session  */}
					{session && (
						<div className="text-white underline cursor-pointer  xs:text-xs sm:text-md md:text-lg ">
							{session.user.name}
						</div>
					)}

					{/* // Sign In & Sign Out Button  */}
					<div className="">
						{!session ? (
							<button
								className="flex  items-center bg-[#f40612]  text-white xs:text-xs sm:text-md md:text-lg px-12 rounded-sm"
								onClick={() => signIn("google")}
							>
								{" "}
								Sign In{" "}
							</button>
						) : (
							<button
								className="flex  items-center bg-[#f40612]  text-white xs:text-xs sm:text-md md:text-lg px-12 rounded-sm"
								onClick={() => signOut()}
							>
								{" "}
								Sign Out{" "}
							</button>
						)}
					</div>
				</div>
			</header>

			{/* main markup */}
			<main className="flex flex-col items-center justify-center text-center flex-1 px-20">
				{/* // heading title  */}
				<h1 className="xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-lg tracking-wide">
					Unlimited movies, Tv shows, and more.
				</h1>
				{/* // Second title   */}
				<h2 className="text-xl font-medium text-white mt-4 mb-8">
					Watch anywhere. Cancel anytime.
				</h2>
				{/* small paragraph  */}
				<p className="text-white text-lg">
					Ready to watch? Enter your email to create or restart your
					membership.
				</p>

				{/* // Get Started  */}
				<div className="flex xs:flex-col sm:flex-row mt-4 justify-center ">
					<input
						type="email"
						name="email"
						placeholder="enter email"
						className="bg-white p-4 xs:min-w-[350px] md:sm:min-w-[350px] lg:min-w-[400px]"
					/>
					<button className="flex flex-row justify-center text-center xs:mt-4 xs:py-2 sm:mt-0 items-center bg-[#f40612]  text-white sm:text-sm md:text-lg lg:text-lg">
						<span className="flex-nowrap"> Get Started</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</button>
				</div>
			</main>
		</div>
	);
}
