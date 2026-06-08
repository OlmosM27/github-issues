import { sleep } from '@helpers/sleep';
import { GithubIssue } from '../interfaces';
import { environment } from '../../../../environments/environment.development';

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssueComments = async (issueNumber: string): Promise<GithubIssue[]> => {
  await sleep(1500);
  try {
    const resp = await fetch(`${BASE_URL}/issues/${issueNumber}/comments`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
    if (!resp.ok) throw "Can't load comments";

    const issue: GithubIssue[] = await resp.json();
    console.log({ issue });

    return issue;
  } catch (error) {
    throw "Can't load comments";
  }
};
