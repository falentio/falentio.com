<section
	class="grid grid-cols-5 grid-rows-2 md:grid-rows-1 py-6 border-b border-black dark:border-zinc-700 auto-rows-max"
>
	<div class="col-span-full md:col-span-2">
		<img
			alt="profile"
			src="//github.com/falentio.png"
			height="200"
			width="200"
			class="rounded-full object-cover mx-auto ring-2 ring-black dark:ring-zinc-700"
		/>
	</div>
	<div class="col-span-full md:col-span-3 lg:col-span-2 p-2">
		<h1 class="text-4xl text-center md:text-start my-2 text-sky-500 mx-auto w-max">
			<span class="hand-writing border-sky-500 select-none"> Kevin Falentio </span>
		</h1>
		<p class="font-jetbrains-mono">
			Hii!!! This is my website that was written in my spare time. Hope you will enjoy this website,
			and pardon me if something goes unexpected.
		</p>
	</div>
</section>

<style>
	.hand-writing {
		display: block;
		word-break: break-all;
		text-align: start;
		height: 2rem;
		overflow: hidden;
		border-right: 0.15rem solid;
		width: 0%;
		animation: types 1s steps(20, end) 1s forwards, cursor 0.7s step-start infinite;
	}

	@keyframes types {
		from {
			width: 0%;
		}

		to {
			width: 100%;
		}
	}

	@keyframes cursor {
		0%,
		100% {
		}
		50% {
			border-color: transparent;
		}
	}
</style>
