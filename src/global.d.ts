declare const process: {
    env: {
        NODE_ENV: 'production' | '';
    };
};

declare function require(library: string): any;
