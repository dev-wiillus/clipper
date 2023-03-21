import { NextApiRequest, NextApiResponse } from "next";
import generateReport from "../../../lib/open-ai/generate-report";
import { ReportInput } from "../../../store/report";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		return;
	}

	const { script } = req.body as unknown as ReportInput;
	// ... check validation
	if (!script) {
		res.status(422).json({ message: "Invalid input." });
		return;
	}

	// report generation
	const report = await generateReport({ script });

	res.status(200).send(report);
}

/* TODO: 문서들 보면서 각각의 기능에 좋은 도구들 찾기
	1. web crawling 
		- 지정 사이트 콘텐츠 크롤링
		- 새콘텐츠 탐지후 크롤링
	2. 분류(chatgpt)
		- 콘텐츠 분석
		- 분류
		- 저장
	3. 리포트 생성
		- 생성 예정 리포트 분석후 적합한 참고 리소스 가져오기
		- 리포트 생성
*/

