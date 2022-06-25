import type { } from '@octokit/rest';

export declare type AutoGreenOptions = {
    owner: string,
    repo: string,
    branch?: string,
    auth?: string,
    debug?: boolean;
}

declare const _default: (options?: AutoGreenOptions) => Promise<void>;

export = _default;
