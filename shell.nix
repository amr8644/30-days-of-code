# shell.nix
let
  pkgs = import <nixpkgs> {};
in
  pkgs.mkShell {
    packages = [
     pkgs.gdb
     pkgs.gcc
    pkgs.pkg-config
    pkgs.meson
    pkgs.ninja

];
}
