import { testing } from './env';

const constants = {};
constants['validUsers'] = ['820351512165351455'];

if (testing) {
	constants['submissionsChannel'] = '993283147951243276';
	constants['acceptedStagesChannel'] = '993283147791867999';
	constants['paymentInfoChannel'] = '993283147951243277';
	constants['paymentLogChannel'] = '993283147791868001';
	constants['headModRole'] = '993283147544408131';

	constants['validUsers'].push('745063586422063214');
	constants['validUsers'].push('761895875361505281');
}
else {
	constants['submissionsChannel'] = '934249193114054666';
	constants['acceptedStagesChannel'] = '934832372074020995';
	constants['paymentInfoChannel'] = '992933954757853214';
	constants['paymentLogChannel'] = '993222826679083079';
	constants['headModRole'] = '946034586167685180';
}

export default constants;
