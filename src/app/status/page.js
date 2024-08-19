import { getServerstatus } from '@/actions/get-server-status';

export default async function RootPage() {
	const serverStatus = await getServerstatus();
	console.log(serverStatus);
	return (
		<div className='flex gap-4 p-4'>
			<div className='flex self-start text-xs text-white'>
				<div className='w-fit rounded-l bg-badge-primary px-1.5 py-0.5'>status reshop server</div>
				<div className={`${serverStatus?.data?.ready ? 'bg-badge-secondary' : 'bg-badge-error'} w-fit rounded-r px-1.5 py-0.5`}>{serverStatus?.data?.ready ? 'pass' : 'failed'}</div>
			</div>
		</div>
	);
}
