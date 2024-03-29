import Form from '@/components/ui/request/Form';
import serverSideAuthGuard from '@/components/utils/serverSideAuthGuard';
import { GetServerSideProps } from 'next';

export default function Request() {
	return (
		<div className="space-y-20 px-10 py-16">
			<div className="flex items-center justify-between px-2">
				<h1 className="space-y-2 text-xl">
					<p>Simply ask what you want to know</p>
					<p className="font-bold">
						Team Clipper will help you from market research to customer analysis
					</p>
				</h1>
			</div>
			<div className="container px-4 text-center">
				<Form />
			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const guard = (await serverSideAuthGuard(context)) as any;
	if (guard.hasOwnProperty('redirect')) return guard;
	return {
		props: {},
	};
};
