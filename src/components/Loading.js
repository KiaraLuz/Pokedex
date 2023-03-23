import { DotSpinner } from '@uiball/loaders';

export const Loading = () => {
	return (
        <div className="container-loader">
            <DotSpinner size={40} speed={0.9} color='black' />;
        </div>
    )
};